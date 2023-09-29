package com.grocery.hub.ordservice.common;

import java.sql.Date;
import java.time.LocalDateTime;
import java.util.List;



import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class Cart {
	

	private long cid;
//	private long cartId;
	private long customerId;
	private long productId;
	private String productName;
	private long productQuantity;
	private long subTotal;
//	private long totalBill;
//	private long cartItemsQuantity;
	
//	@OneToMany(targetEntity=CartItems.class,cascade = CascadeType.ALL)
//	@JoinColumn(name="fk_cart_id",referencedColumnName="cart_id")
//	private List<CartItems> cartItems;
}
