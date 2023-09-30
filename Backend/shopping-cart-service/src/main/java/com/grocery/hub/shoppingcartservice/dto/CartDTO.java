package com.grocery.hub.shoppingcartservice.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CartDTO {
    private long cid;
    private long customerId;
    private long productId;
    private String productName;
    private long productQuantity;
    private long subTotal;
    private byte[] productImage;
}
