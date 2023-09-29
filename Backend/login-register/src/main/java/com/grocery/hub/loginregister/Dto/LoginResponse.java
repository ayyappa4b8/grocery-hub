package com.grocery.hub.loginregister.Dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class LoginResponse {
	
	long customerId;
	String customerName;
	String message;
	Boolean status;
	private long roleId;
}