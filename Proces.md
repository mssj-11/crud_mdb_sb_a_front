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



##  Correr
```
ng serve -o
```