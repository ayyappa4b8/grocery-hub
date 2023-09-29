package com.grocery.hub.ordservice.common;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Product {
	

	private long productId;
	private String productName;
	private String productCategory;
	private String description;
	private long productPrice;
	@Lob
	@Column(name = "productImage", columnDefinition="LONGBLOB")
	private byte[] productImage;
}
