# Laravel
- Create DB Migration tbl posts.
- Create seed posts.
- Create endpoint for GET, POST, PUT, and DELETE posts.
- Use pagination on posts.

## How to Run a Project
1. Install Composer
```
composer install
```
2. Copy `.env.example` to `.env`
```
cp .env.example .env
```
3. Generate Key
```
php artisan key:generate
```
4. _Optional_, to replace the new database.sqlite
```
rm database/database.sqlite && cp database/database_example.sqlite database/database.sqlite && php artisan migrate
```
5. _Optional_, for data seeding
```
php artisan db:seed
```
6. Run Project
```
php artisan serve
```

## Open Project
url = [http://127.0.0.1:8000](http://127.0.0.1:8000)