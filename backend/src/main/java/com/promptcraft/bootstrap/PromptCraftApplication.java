package com.promptcraft.bootstrap;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = "com.promptcraft")
public class PromptCraftApplication {

  public static void main(String[] args) {
    SpringApplication.run(PromptCraftApplication.class, args);
  }
}
