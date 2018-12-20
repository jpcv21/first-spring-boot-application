package projects.springboot.portfolio;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;

@RestController()
@RequestMapping(path="/api")
public class Controller {
  @GetMapping(path = "/hello-world")
  public String helloWorld(){
    return "Hello world!";
  }
}