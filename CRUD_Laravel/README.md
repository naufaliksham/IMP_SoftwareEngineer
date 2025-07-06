# Laravel
- Create DB Migration tbl posts.
- Create seed posts.
- Create endpoint for GET, POST, PUT, and DELETE posts.
- Use pagination on posts.

## How to Run a Project
1. ```composer install```
2. ```cp .env.example .env```
3. ```php artisan key:generate```
4. _Optional_ <br>
```
rm database/database.sqlite && cp database/database_example.sqlite database/database.sqlite && php artisan migrate
```
5. _Optional_ ```php artisan db:seed```
6. ```php artisan serve```

## Open Project
url = [http://127.0.0.1:8000](http://127.0.0.1:8000)