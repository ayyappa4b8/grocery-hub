package com.grocery.hub.shoppingcartservice;


import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import com.grocery.hub.shoppingcartservice.common.AddToCartDto;
import com.grocery.hub.shoppingcartservice.common.AddToCartResponse;
import com.grocery.hub.shoppingcartservice.entity.Cart;
import com.grocery.hub.shoppingcartservice.repository.CartRepository;
import com.grocery.hub.shoppingcartservice.service.CartService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.grocery.hub.shoppingcartservice.common.CartItems;

@SpringBootTest
class ShoppingCartServiceApplicationTests {

	
	@Autowired
	private CartService cartService;
	
	@MockBean
	private CartRepository cartRepository;


	@Test
	public void addtoCartTest() {
		AddToCartDto ad = new AddToCartDto(203,1);
		
		List<Cart> ct = new ArrayList<Cart>();
		Cart c1 = new Cart(1,101,203,"watermelon",1,90,new byte[0]);
		ct.add(c1);
		when(cartRepository.getCartItemsById(101)).thenReturn(ct);
		
		AddToCartResponse ar = new AddToCartResponse();
		ar.setCustomerId(101);
		List<CartItems> ci = new ArrayList<>();
		CartItems cc = new CartItems(203,"watermelon",1,90,new byte[0]); 
		ci.add(cc);
		ar.setCartItems(ci);
		ar.setCartItemsQuantity(1);
		ar.setTotalBill(90);
		assertEquals(ar,cartService.addToCart(101, ad));
		
	}
	
	
	@Test
	public void getCartItemsByCustIdTest() {
		
		List<Cart> ct = new ArrayList<Cart>();
		Cart c1 = new Cart(1,101,202,"apples",1,120,new byte[0]);
		ct.add(c1);
		when(cartRepository.getCartItemsById(101)).thenReturn(ct);

		AddToCartResponse ar = new AddToCartResponse();
		ar.setCustomerId(101);
		List<CartItems> ci = new ArrayList<>();
		CartItems cc = new CartItems(202,"apples",1,120,new byte[0]);
		ci.add(cc);
		ar.setCartItems(ci);
		ar.setCartItemsQuantity(1);
		ar.setTotalBill(120);
		
		assertEquals(ar,cartService.getCartItemsById(101));
	}
	
	
	@Test
	public void deleteCartItemByIdTest()
	{
		List<Cart> ct = new ArrayList<Cart>();
		Cart c1 = new Cart(1,101,202,"apples",1,120,new byte[0]);
		Cart c2 = new Cart(2,101,203,"mangoes",1,120,new byte[0]);
		ct.add(c1);
		ct.add(c2);
		
		when(cartRepository.getCartItemsById(101)).thenReturn(ct);
		
		AddToCartResponse ar = new AddToCartResponse();
		ar = cartService.deleteCartItemById(101,202);
		verify(cartRepository, times(1)).delCartItemById(101L,202L);
		
	}

}
