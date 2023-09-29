package com.grocery.hub.loginregister.advice;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.grocery.hub.loginregister.exceptions.CustomerNotFoundException;

@RestControllerAdvice
public class CustomerExceptionHandler{


	 
	 @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
	 @ExceptionHandler(CustomerNotFoundException.class)
	 public Map<String,String> handleCustomerNotFoundException(CustomerNotFoundException exception)
	 {
		 Map<String,String> errormap = new HashMap<>();
		 errormap.put("errorMessage", exception.getMessage());
		 return errormap;
	 }

	 @ResponseStatus(HttpStatus.BAD_REQUEST)
	 @ExceptionHandler(MethodArgumentNotValidException.class)
	 public Map<String, String> handleInvalidArguments(MethodArgumentNotValidException exception){
	        Map<String, String> errorMap= new HashMap<>();
	        exception.getBindingResult().getFieldErrors().forEach(error->{
	            errorMap.put(error.getField(), error.getDefaultMessage());
	        });

	        return errorMap;

	    }
}
