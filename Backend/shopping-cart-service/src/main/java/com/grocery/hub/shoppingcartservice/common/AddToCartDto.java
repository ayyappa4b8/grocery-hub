package com.grocery.hub.shoppingcartservice.common;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AddToCartDto {
	

//		private long customerId;
		private long productId;
		private long productQuantity;
}
