package com.cg.main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;


@SpringBootApplication
@ComponentScan("com.cg")
public class PlayerDemoApplication {

	
	public static void main(String[] args) {
		
		SpringApplication.run(PlayerDemoApplication.class, args);
		System.out.println("Player Main Started...");
	}
}
