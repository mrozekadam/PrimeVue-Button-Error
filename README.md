# **NewtonMedia a.s. – Production Tools**

## **Project setup**
```
npm install
```

## **Requirements**
- .NET Core 6
- Node.js (NPM)
- Vue Cli
- Visual Studio 2022 (optional)
- VS Code (optional - prefered)


<br /> <br />

## **Project startup**
### Start .NET Core 6 API
```
dotnet run
```

### Start Vue app
```
npm run serve
```

### Visit localhost:5000
```
http://localhost:5000/
```

<br /> <br />

# **Quick guide**

## Adding a new module
- Create module view file in specific directory - @/modules/{category}/{moduleName}/
- Create module store in @/store/modules/{moduleName}.store.js
- Register module globally in @/exports/exp.modules.js to use it without the need of an import
- (Optional) Register module in **moduleconf** store for notifications
<br /><br />

## Add module to notification system
- Create module as specified in "Adding a new module"
- Add module do **moduleconf** store
- Add module **ID** to **moduleIdsWhitelist** in **NotificationsConfigPage.vue** setup method
<br /><br />


## Module / Tool is unavalible in the app
Check module permissions. As a dashboard developer you should be allowed to access all tools / modules.
<br /><br />


# **Rules & Tips**
1. All stores should be stored in the @/store directory
2. Tools have to be created in the /prodtools/ directory
3. Try to keep the code as clean as possible 
