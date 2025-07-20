package dev.prenesh.movies.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration // This annotation tells Spring to pick up this class as a configuration source
public class CorsConfig implements WebMvcConfigurer { // Implement WebMvcConfigurer to customize CORS settings

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        // This line applies the CORS policy to all API endpoints starting with /api/
        // If your API endpoints are directly at the root (e.g., /movies), you might use "/**"
        registry.addMapping("/**")
                // This explicitly allows requests from your React application's development server
                .allowedOrigins("http://localhost:3000")
                // These are the HTTP methods that your frontend will use (GET, POST, PUT, DELETE, and OPTIONS for preflight)
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                // This allows all headers to be sent in the request
                .allowedHeaders("*")
                // This allows sending of cookies and HTTP authentication credentials (if you use them later)
                .allowCredentials(true);
    }
}