package com.grocery.hub.product_service.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ProductResponse {

	private long productId;
	private String productName;
	private String category;
	private String description;
	private long productPrice;
	private byte[] productImage;
}
