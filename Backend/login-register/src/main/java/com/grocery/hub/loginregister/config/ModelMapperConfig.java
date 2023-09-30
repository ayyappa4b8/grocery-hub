package com.grocery.hub.loginregister.config;

import com.grocery.hub.loginregister.dto.CustomerDto;
import com.grocery.hub.loginregister.entity.Customer;
import org.modelmapper.ModelMapper;
import org.modelmapper.PropertyMap;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ModelMapperConfig {

    @Bean
    public ModelMapper modelMapper() {
        ModelMapper modelMapper = new ModelMapper();

        // Create a custom PropertyMap to map the Customer's role Id from the Customer entity
        PropertyMap<Customer, CustomerDto> customerMap = new PropertyMap<Customer, CustomerDto>() {
            protected void configure() {
                map().setRoleId(source.getRole().getRoleId());
            }
        };

        modelMapper.addMappings(customerMap);

        return modelMapper;
    }

}
