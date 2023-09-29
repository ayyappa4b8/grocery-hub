package com.grocery.hub.shoppingcartservice.common;
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
	private byte[] productImage;
}
