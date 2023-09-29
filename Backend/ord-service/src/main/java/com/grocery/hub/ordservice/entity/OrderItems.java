package com.grocery.hub.ordservice.entity;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class OrderItems {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long pid; 
	private long productId;
	private String productName;
	private long productQuantity;
	private long productSubTotalPrice;
}
