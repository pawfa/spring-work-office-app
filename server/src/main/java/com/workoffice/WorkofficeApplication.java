package com.workoffice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.web.ErrorViewResolver;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.PropertySource;
import org.springframework.http.HttpStatus;
import org.springframework.web.servlet.ModelAndView;

import java.util.Collections;

@SpringBootApplication
public class WorkofficeApplication {

	public static void main(String[] args) {
		SpringApplication.run(WorkofficeApplication.class, args);
	}
	@Bean
	public ErrorViewResolver customErrorViewResolver() {
		final ModelAndView redirectToIndexHtml = new ModelAndView("forward:/resources/index.html", Collections.emptyMap(), HttpStatus.OK);
		return (request, status, model) -> status == HttpStatus.NOT_FOUND ? redirectToIndexHtml : null;
	}
}
