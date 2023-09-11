# Mapping

Mapping is the process of changing the structure of an object. It's used to transform data when the source doesn't match the desired data model. Mapping is done by a series of mapping rules in a To <- From style. In simple mapping, the position of a value within an object is changed.

Okey, lets take a look at the most commonly used example api, [petstore](https://petstore.swagger.io/#/pet/findPetsByStatus) and a basic object.

```json
{
  "id":"0d671e30-04af-479a-926a-5e7044484171",
  "name":"doggie",
  "status": "available"
}
```

Now lets say we want to move the status into a sub object called meta data, like this

```json
{
  "id":"0d671e30-04af-479a-926a-5e7044484171",
  "name":"doggie",
  "metadata":{
     "status": "available"
  }
}
```

Then we need to create a mapping that does two things
Copy the property to a new location trough mapping
Unset the property at the old location

Which will give us

```json
{
   "name": "A simple mapping for doggie",
   "description": "This mapping changes the position status property",
  "passthrough": false,
   "mapping": {
       "metadata.status": "status"
   }
}
```

So what happened under the hood? How is de status moved? Lets take a look at the first command set

```json
{
   "mapping": {
       "metadata.status": "status"
   }
}
```

Rules are carried out as a `To <- From` pair. In this case, the `metadata.status` key has a `status`  value. When interpreting what the description is, the mapping service has two options:

* The value is either a dot notation array pointing to another position in the object (see [dot notation](https://grasshopper.app/glossary/data-types/object-dot-notation/#:~:text=Dot%20notation%20is%20one%20way,%3A%205%2C%20%7D%3B%20console)). If so, then the value of that position is copied to the new position. (Under the hood the gateway uses [PHP dot notation to](https://github.com/adbario/php-dot-notation) achieve this result)
* The value is not a dot notation array to another position in the object (see dot notation), then the value is rendered as a [twig](https://twig.symfony.com/) template.

> **Note**
> - The key is ALWAY treated as a dot notation telling the service where to move the properties content to.
> - Mapping object MUST have a name, and SHOULD have a description
> - It is not necessary to declare every step of the array (e.g. metadata, metadata.status, metadata.status.name) just declaring the property where you want it will create the in between array key’s


Keep in mind that dot notations have no maximum depth, so on object like

```json
{
  "id":"0d671e30-04af-479a-926a-5e7044484171",
  "name":"doggie",
  "metadata":{
 	 "status":{
     		"name": "available"
	}
  }
}
```

Could be mapped like

```json
{
   "name": "A simple mapping",
   "description": "This mapping changes the position of a value within an object",
  "passthrough": false,
   "mapping": {
       "status": "metadata.status.name"
   }
}
```

To

```json
{
  "id":"0d671e30-04af-479a-926a-5e7044484171",
  "name":"doggie",
  "status": "available"
}
```

> **Note**
> Using dot notation to move values around within an object will NOT cause the value to change or be converted. In other words you can move an entire array or sub object around by simply moving the property that it is in. Also booleans will remain booleans, integers integers etc.

> **Note**
> In the case that a key has a dot in it and you don’t want it to trigger the array pointing with dot notation you can use the ASCII code for a dot instead. Example: “location.first.name” if you want first.name to be a string (just to show what i mean: “location.’first.name’”) it is possible to do this: “location.first&#46;name”. For more options like this, see: https://www.freeformatter.com/html-entities.html.


### Advanced (Twig) mapping

Another means of mapping is Twig mapping. Let's look at a more complex mapping example to transform or map out data. We have a tree object in our data layer  looking like

```json
{
  "id":"0d671e30-04af-479a-926a-5e7044484171",
  "name":"doggie",
  "status": "available"
}
```

Now the petstore decided that we would like to assign pets to an ille, there are three illes (green, blue and red) and every pet needs to be assigned randomly. That means that we need business logic in our mapping. fortynalty we can use [twig](https://twig.symfony.com/doc/2.x/) logic in our mapping by palccing it in  {{}} braces. that means that we can do this

```json
{
   "name": "A simple mapping",
   "description": "This mapping changes the position of a value within an object",
  "passthrough": true,
   "mapping": {
       "ille": "{{ random([green, blue , red]) }"
   }
}
```

To turn this

```json
{
  "id":"0d671e30-04af-479a-926a-5e7044484171",
  "name":"doggie",
  "status": "available"
}
```

into this

```json
{
  "id":"0d671e30-04af-479a-926a-5e7044484171",
  "name":"doggie",
  "status": "available",
  "ille": "red"
}
```

> **Note**
> Both dot-notation and twig-based mapping are valid to move value's around in an object. Dot-notation is preferred performance-wise.
> The `passthrough` allows you to blindly copy al the data of the old object into the new object (when set to true)

### Pass Through
In a normal situation the mapping only describes the wanted object, meaning that all variables that are not specifically mapped are ignored and won’t make it to the new object. If we have large objects this might be a lot of work (we would need to map EVERY value).

To solve this problem we might add passthrough to our mapping definition, this will cause all the current values to be copied under the same properties into the new object.  So

```json
{
  "id":"0d671e30-04af-479a-926a-5e7044484171",
  "name":"The big white tree",
  "description": "This is the tree that granny planted when she and gramps got married", 
  "location":"Orvil’s farm", 
  "species":"Chestnut"
}
```

With

```json
{
   "name": "A twig mapping",
   "description": "For more complex mappings", 
  "passthrough": true,
   "mapping": {
       "metadata.location": "{{ location }}",
       "metadata.species": "{{ species }}"
   }
}
 ```
Would become 

 ```json
{
    "id":"0d671e30-04af-479a-926a-5e7044484171",
    "name":"The big white tree",
    "description": "This is the tree that granny planted when she and gramps got married", 
    "location":"Orvil’s farm", 
    "species":"Chestnut",
    "metadata":{
        "location":"Orvil’s farm",
        "species":"Chestnut"
    }
}
```

Normally when using passthrough we would like to clean up the result because we tend to end up with double data.

> **Note**
> Using passthrough represents a security risk. All values make it to the new object, so it should only be used on trusted or internal objects

### Dropping keys

Okay so now we would like to do some cleanup. We can do that under the `unset` property. The `unset` property accepts an array of dot notation to drop. Let's change the mapping to

```json
{
  "name": "A dropping keys mapping",
   "description": "For dropping keys",
   "mapping": {
       "metadata.location": "{{ location }}",
       "metadata.species": "{{ species }}"
   },
   "unset": [
       "location",
       "species"
   ]
}
```

We now have an object that’s

```json
{
    "id":"0d671e30-04af-479a-926a-5e7044484171",
    "name":"The big white tree",
    "description":"This is the tree that granny planted when she and gramps got married", 
    "metadata":{
        "location":"Orvil’s farm", 
        "species":"Chestnut"
  }
}
```

> **Note**
> Dropping keys is always the second last action performed in the mapping process (before casting)

### Adding keys

The mapping setup allows you to add keys and values to objects simply by declaring them. Let's look at the above example and assume that the county wants us to enter the primary color of the tree. A value that we don't have in our object. Assume all our trees to be brown. We could then edit our mapping to

```json
{
   "name": "An adding keys mapping",
   "description": "For adding keys",
   "mapping": {
       "metadata.location": "{{ location }}",
       "metadata.species": "{{ species }}",
       "metadata.color": "Brown"
   },
   "unset": [
       "location",
       "species"
   ]
}
```

Which would return

```json
{
    "id":"0d671e30-04af-479a-926a-5e7044484171",
    "name":"The big white tree",
    "description": "This is the tree that granny planted when she and gramps got married", 
    "metadata":{
        "location":"Orvil’s farm", 
        "species":"Chestnut", 
        "color":"Brown"
  }
}
```

...even though we didn't have a color value initially.

Also, note that we used a simple string value here instead of twig code. That's because the twig template may contain strings.

### Working with conditional data

Twig natively supports many [logical operators](https://twig.symfony.com/doc/3.x/templates.html), but a few of those are exceptionally handy when dealing with mappings. For example, concatenating
strings like {{ 'string 1' ~ 'string 2' }} which can be used as the source data inside the mapping

```json
{
   "name": "An conditional data mapping",
   "description": "For concatenating strings",
   "mapping": {
       "metadata.location": "{{ location }}",
       "metadata.species": "{{ species }}",
       "metadata.color": "{{ \"The color is \" ~ color }}"
   },
   "unset": [
       "location",
       "species",
       "color"
   ]
}
```

The same is achieved with [string interpolation](https://twig.symfony.com/doc/1.x/templates.html#string-interpolation) via

```json
{
  "name": "An conditional data mapping",
   "description": "For concatenating strings",
   "mapping": {
       "metadata.location": "{{ location }}",
       "metadata.species": "{{ species }}",
       "metadata.color": "{{ \"The color is #{color}\" }}"
   },
   "unset": [
       "location",
       "species",
       "color"
   ]
}
```

So both of the above notations would provide the same result

Another useful twig take is the if statement. This can be used to check if a values exists in the first place

```json
{
  "name": "An conditional data mapping",
   "description": "For concatenating strings",
   "mapping": {
       "metadata.location": "{{ location }}",
       "metadata.species": "{{ species }}",
       "metadata.color": "{% if color %} {{color}} {% else %} unknown {% endif %}"
   },
   "unset": [
       "location",
       "species",
       "color"
   ]
}
```

or to check for specific values

```json
{
   "name": "An conditional data mapping",
   "description": "For concatenating strings",
   "mapping": {
       "metadata.location": "{{ location }}",
       "metadata.species": "{{ species }}",
       "metadata.color": "{% if color == \"violet\" %} pink {% endif %}"
   },
   "unset": [
       "location",
       "species",
       "color"
   ]
}
```

### Sub mappings [ in beta]

In some cases you might want to make use of mappings that you have created before with the mapping you are currently defining. Common cases include mapping an array of sub objects or dividing your mapping into smaller files for stability purposes.

To do this you can access the mapping service from within a mapping trough twig like:


```json
{
   …
   "mapping": {
       "{key}": "{{ {value|mappingService(‘{id or ref}’, {array})}}}",
   },
   …
}
```

The mapping service takes two arguments:
[required]: Either the UUID or reference of the mapping that you want to use
[optional, defaults to false]:Whether you want to be mapped in its entirety (as an object) or as an array (of objects)


> **Warning**
> This functionality is in public betá and should not be used on production environments

### Casting (Forcing) the type/format of values

Due to twig rendering, mapping output will always change all the values to `string`. For internal gateway traffic, this isn’t problematic, as the data layer will cast values to the appropriate outputs. When sending data to an external source, having all Booleans cast to strings might be bothersome. To avoid this predicament, we can force the datatype of your values by ‘casting’ them

We can cast values by including a cast property in our mapping

```json
{
   "name": "An conditional data mapping",
   "description": "For casting to strings",
   "cast": {
     "{key}": "{type of casting to perform}"
   }
}
```

> **Warning**
> Beware what functions PHP uses to map these values and if the cast should be possible (or else an error is thrown).

| Cast            | Function                                                  | Twig   |
|---------------- |---------------------------------------------------------- |--------|
| string          | <https://www.php.net/manual/en/function.strval.php>         | No     |
| bool / boolean  | <https://www.php.net/manual/en/function.boolval.php>        | No     |
| int / integer   | <https://www.php.net/manual/en/function.intval.php>         | No     |
| float           | <https://www.php.net/manual/en/function.floatval>           |  No     |
| array           |                                                           | No     |
| date            | <https://www.php.net/manual/en/function.date>               |  No     |
| url             | <https://www.php.net/manual/en/function.urlencode.php>      |  Yes   |
| rawurl          | <https://www.php.net/manual/en/function.rawurlencode.php>   |  Yes   |
| base64          | <https://www.php.net/manual/en/function.base64-encode.php>  |  Yes   |
| json            | <https://www.php.net/manual/en/function.json-encode.php>    |  Yes   |
| xml             |                                                           |  No     |

Example a mapping of

```json
{
  ..
    "metadata.hasFruit": "Yes",
  ..
}
```

With mapping

```json
{
  …
   "cast": {
       “metadata.hasFruit”: "bool"
   }
  …
}
```

Would return

```json
{
  ...
    "metadata":{
      ...
      "hasFruit":true
  }
}
```

> **Note**
> Casting is always the last action performed by the mapping service


### Translating values

Twigg natively supports [translations](https://symfony.com/doc/current/translation.html),  but remember that translations are an active filter `|trans`. And thus should be specifically called on values you want to translate. Translations are performed against a translation table. You can read more about configuring your translation table here.

The base for translations is the locale, as provided in the localization header of a request. When sending data, the base is in the default setting of a gateway environment. You can also translate from an specific table and language by configuring the translation filter e.g. {{ 'greeting' | trans({}, `[table_name]`, `[language]`) }}

Original object

```json
{
    "color":"brown"
}
```

With mapping

```json
{
   "mapping": {
    	"color":"{{source.color|trans({},\"colors\") }}"
    }
}
```

returns (on locale nl)

```json
{
    "color":"bruin"
}
```

If we want to force German (even if the requester asked for a different language), we'd map like

```json
{
    "color":"{{source.color|trans({},\"colors\".\"de\") }}" 
}
```

And get

```json
{
    "color":"braun"
}
```

### Renaming Keys

The mapping doesn't support the renaming of keys directly but can rename keys indirectly by moving the data to a new position and dropping the old position (is we are using pass through)

Original object

```json
{
    "name":"The big old tree"
}
```

With mapping

```json
{
   "passtrough":true,
   "mapping": {
   	 "naam":"{{source.name }}"
   } 
  "unset": [
      "name"
  ]
}
```

returns

```json
{
    "naam":"The big old tree"
}
```

### What if I can't map?

Even with all the above options, it might be possible that the objects you are looking at are too different to map. In that case, don't look for mapping solutions. If objects A and B are too different, add them to the data layer and write a plugin to keep them in sync based on actions.


