package com.grocery.hub.loginregister;

import com.fasterxml.jackson.databind.ObjectMapper;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import io.swagger.v3.oas.models.OpenAPI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.annotation.Bean;

@SpringBootApplication(exclude=SecurityAutoConfiguration.class)
@EnableDiscoveryClient
public class LoginRegisterApplication {

	public static void main(String[] args) {
		SpringApplication.run(LoginRegisterApplication.class, args);
	}

	@Autowired
	ObjectMapper ojectMapper;

	@Bean
		public OpenAPI customOpenAPI(@Value("Customer Login & Registration") String appDesciption, @Value("1.0.0") String appVersion) {
		return new OpenAPI()
				.info(new Info()
								.title("sample application API")
								.version(appVersion)
								.description(appDesciption)
								.termsOfService("http://swagger.io/terms/")
								.license(new License().name("Apache 2.0").url("http://springdoc.org")));
	}

}
