本文学习自[gitbook](https://legacy.gitbook.com/book/natee/javascript-design-patterns/details)

英文原文: https://www.joezimjs.com

## 单例模式

在JavaScript里，单例模式（the Singleton Pattern）非常简单，简单到可以被忽略，但是它在技术层面是如何工作的，我们还是有必要了解一下的。单例的代码写在一个单独的对象里，因此你不需要去实例化一个新对象就可以在任何你需要的时候使用它的资源，单例允许在全局范围内访问它的资源。

在JavaScript里，我们常在管理命名空间时使用单例模式，它可以降低你在代码中创建全局变量的数量。单例模式在JavaScript里要比在其他语言中更有用，因为它可以用命名空间来降低全局变量所带来的风险。

### 一个基本的单例模式

这是一个最基本最简单的用JavaScript实现的单例模式。它就是一个简单的有一些方法和属性的对象字面量，假想它们是因为某种关系才被放到一起。

```
var Singleton = {
    attr: 1,
    another_attr: 'value',

    method: function() {...},
    another_method: function() {...}
};
```

因为它是一个对象字面量，所以我不需要实例化它，并且这个对象仅此一个。也就是说我们可以通过一个全局变量的入口访问所有的方法和属性，如下所示：

```
Singleton.attr += 1;
Singleton.method();
...
```

### JavaScript命名空间

单例模式在JavaScript中的一种使用情形就创建命名空间。像Java和C#这样的语言，命名空间这种特性已经被内建到语言本身了，并且命名空间在这些语言中是必须的。通过创建命名空间或者包来把代码组织到逻辑块中。这也是在JavaScript中使用单例模式最重要的原因，当你通过使用命名空间把你的代码从全局作用域移动到一个新的单例中的时候，可以避免全局变量被意外覆盖（overwrite）以及全局变量引起其他的bug。

使用单例模式管理命名空间非常简单。同样你可以仅仅通过创建一个对象字面量就搞定：

```
var Namespace = {
    Util: {
        util_method1: function() {...},
        util_method2: function() {...}
    },
    Ajax: {
        ajax_method: function() {...}
    },
    some_method: function() {...}
};
```

如你所见，现在如果你想使用一个实用方法，可以在Namespace.Util下面找到它，就像下面代码中所示的那样。当然，下面所示的some_method方法并没有在单例中嵌套多层。

```
Namespace.Util.util_method1();
Namespace.Ajax.ajax_method();
Namespace.some_method();
```

通常你有可能会把这些方法作为全局函数，这也就意味着它们非常有可能会被覆盖，尤其是像get这样简单的名字，诸如此类的名字再平常不过了。你只需要把全部的变量和函数添加到一个单例中，就可以完全不给别人篡改你代码的机会。

### 具体页面的JavaScript代码

在很多情况下，一个网站的某些页面运行的JavaScript代码和其他页面是不同的。你可以用单例管理命名空间的技术来为每个页面组织专门的代码，然后在页面加载完成后执行它们。

```
Namespace.homepage = {
    init: function() {...},
    method1: function() {...},
    method2: function() {...}
}

Namespace.contactpage = {
    init: function() {...},
    method1: function() {...},
    method2: function() {...}
}

Namespace.pageutil = {
    getPageName: function() {
        // 返回当前页面的标识符
    }
}

var pageName = Namespace.pageutil.getPageName();
window.onload = Namespace[pageName].init;
```

这对于针对不同页面上出现的不同表单添加验证代码非常有用。你甚至可以提取出一个新的命名空间来封装些实用功能，比如我这里的Namespace.pageutil.getPageName。这和我之前提到的稍有不同，因为getPageName方法并非某个页面专有的代码，但是却可以用它来正确映射到页面专有代码。