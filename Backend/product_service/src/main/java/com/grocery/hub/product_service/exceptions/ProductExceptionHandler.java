package com.grocery.hub.product_service.exceptions;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class ProductExceptionHandler extends ResponseEntityExceptionHandler{

	 @ExceptionHandler(ProductNotFoundException.class)
	 public ResponseEntity<ProductErrorResponse> handleProductServiceException(ProductNotFoundException exception) {
	        return new ResponseEntity<>(new ProductErrorResponse().builder()
	                .errorMessage(exception.getMessage())
	                .build(), HttpStatus.NOT_FOUND);
	    }
}
