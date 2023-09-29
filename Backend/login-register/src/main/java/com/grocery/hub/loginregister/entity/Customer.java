package com.grocery.hub.loginregister.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Customer {
	
	@Id
	@GeneratedValue(strategy= GenerationType.AUTO)
	private long customerId;
	@NotEmpty(message="Name should not be null")
	private String customerName;
	@NotEmpty
	@Email(message="invalid email address")
	private String customerEmail;
	@NotEmpty(message="Password cannot be null")
	private String customerPassword;
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "role_id", nullable = false)
	private Role role;
	private boolean isActive;
	

}
