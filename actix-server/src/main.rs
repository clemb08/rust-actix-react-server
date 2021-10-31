use actix_files::NamedFile;
//use actix_identity::{CookieIdentityPolicy, IdentityService};
use actix_web::{web, guard, App, HttpServer, Result, HttpRequest, HttpResponse};

#[actix_web::main]
async fn main() -> std::io::Result<()> {

   /// https://actix.rs/docs/static-files/
    async fn index(_req: HttpRequest) -> Result<NamedFile> {
        println!("Redirected to React SPA");
        Ok(actix_files::NamedFile::open("../react-client/build/index.html")?)
    }

    // Start http server
    HttpServer::new(move || {

        App::new()
            .service(actix_files::Files::new("/static", "../react-client/build/static"))
            // limit the maximum amount of data that server will accept
            .data(web::JsonConfig::default().limit(4096))
            .default_service(
                web::resource("")
                    .route(web::get().to(index))
                    .route(
                        web::route()
                            .guard(guard::Not(guard::Get()))
                            .to(|| HttpResponse::MethodNotAllowed()),
                    )
            )
    })
    .bind("127.0.0.1:4200")?
    .run()
    .await
}