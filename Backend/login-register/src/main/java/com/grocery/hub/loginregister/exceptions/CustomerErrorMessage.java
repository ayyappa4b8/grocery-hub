package com.grocery.hub.loginregister.exceptions;



import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CustomerErrorMessage {
	 private String errorMessage;
}
