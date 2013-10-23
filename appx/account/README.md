# Account Appx

This appx contains the presentation and business logic for an
account section in the admin panel.

- Views/Directives
  * View Account (show-account)
  * Edit Account (edit-account)

- Expected API

  GET /api/accounts/:id
  PUT /api/accounts/:id

- Example Usage

### Show Template

``` html
<section class="col-md-8">
  <show-account id="{{account.id}}"></show-account>
</section>
```

### Edit Template

``` html
<section class="col-md-8">
  <edit-account id="{{account.id}}" source="#/admin"></edit-account>
</section>
```
