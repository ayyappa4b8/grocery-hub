package com.grocery.hub.product_service.exceptions;

import lombok.Builder;
import lombok.Data;

@Data
public class ProductNotFoundException extends RuntimeException{
	
    public ProductNotFoundException(String message) {
        super(message);
    }

}
