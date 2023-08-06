#	FRONT TO CONSUME API

##	App creation
```sh
ng new crud_mdb_sb_a_front
```

##	Installation sweetalert2
```sh
npm install sweetalert2 @sweetalert2/ngx-sweetalert2
```

##	Installation ngx-toastr for the latest version of Angular(current >= 16.x)
```sh
npm i ngx-toastr
```


##  Component creation:

### Component "Menu"
```sh
ng g c menu/menu --skip-tests --flat
```

### Component "List"
```sh
ng g c product/list --skip-tests --flat
```

### Component "Detail"
```sh
ng g c product/detail --skip-tests --flat
```

### Component "Create"
```sh
ng g c product/create --skip-tests --flat
```

### Component "Update"
```sh
ng g c product/update --skip-tests --flat
```

## Service creation:
```sh
ng g s services/product --skip-tests
```

## Class creation:
```sh
ng g class model/product --skip-tests
```

#   Environments:
## Add environments
```sh
ng generate environments
```

## Service storage:
```sh
ng g s services/storage --skip-tests
```

## Service subject (no necesary):
```sh
ng g s services/subject --skip-tests
```



##  Correr
```
ng serve -o
```



#   Error Solutions:
##  Subscribe deprecated
```js
  getProducts(): void {
    this.productService.list().subscribe(
      data => {
        this.products = data;
        console.log(this.products);
      },
      err => {
        this.toast.error(err.error.message, 'Error', { timeOut: 3000, positionClass: 'toast-top-center' });
      }
    );
  }
```
### Replace by
```js
  getProducts(): void {
    this.productService.list().subscribe(
    {
      next: data => {
        this.products = data;
        console.log(this.products);
      },
      error: err => {
        this.toast.error(err.error.message, 'Error', { timeOut: 3000, positionClass: 'toast-top-center' });
      }
    }
    );
  }
```

##  ERROR Access to XMLHttpRequest
```sh
Access to XMLHttpRequest at 'http://localhost:8080/product' from origin 'http://localhost:4200' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
```
### Solution (Install cors)
```sh
npm install cors
```