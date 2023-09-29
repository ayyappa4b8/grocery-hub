package com.grocery.hub.loginregister.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class SubscribeCustomers {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long sid;
	private String custEmail;
	private String custName;
}
