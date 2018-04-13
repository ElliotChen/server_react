package tw.elliot.web.config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.MessageSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.support.ReloadableResourceBundleMessageSource;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewResolverRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurationSupport;

@Configuration
@ComponentScan(basePackages = {"tw.elliot.web.ctrl"})
public class WebApplicationConfig extends WebMvcConfigurationSupport {
	private static final Logger logger = LoggerFactory.getLogger(WebApplicationConfig.class);

	@Override
	protected void configureViewResolvers(ViewResolverRegistry registry) {
		logger.info("---- Support : Register JSP View -----");
		registry.jsp("/WEB-INF/jsp", ".jsp");
	}

	@Override
	protected void addResourceHandlers(ResourceHandlerRegistry registry) {
		logger.info("---- Support : Register ResourceHandler -----");
		registry.addResourceHandler("/resources/**").addResourceLocations("/resources/");
		registry.addResourceHandler("/index.html").addResourceLocations("/index.html");
	}


	@Bean(name = "messageSource")
	public MessageSource messageSource() {
		ReloadableResourceBundleMessageSource messageSource = new ReloadableResourceBundleMessageSource();
		messageSource.setBasename("classpath:message");
		messageSource.setDefaultEncoding("utf-8");
		return messageSource;
	}
}
