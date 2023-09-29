package com.grocery.hub.shoppingcartservice.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.grocery.hub.shoppingcartservice.entity.Cart;

import jakarta.transaction.Transactional;

@Repository
public interface CartRepository extends JpaRepository<Cart,Long>{
	

	
	@Modifying(clearAutomatically=true)
	@Transactional
	@Query(value="DELETE FROM Cart c WHERE c.customerId=:cid AND c.productId=:pid")
	void delCartItemById(@Param("cid") long cid,@Param("pid") long pid);
	
	@Modifying(clearAutomatically = true)
	@Transactional
	@Query(value="DELETE FROM Cart c WHERE c.customerId=:cid")
	void delCartAfterOrder(@Param("cid") long cid);
	
	
	@Query(value="SELECT COUNT(c) FROM Cart c WHERE c.customerId=:cid")
	long countByCustId(@Param("cid") long cid);
	
	
	@Query(value="SELECT c FROM Cart c WHERE c.customerId=:cid AND c.productId=:pid")
	Cart getProductFromCart(@Param("cid") long cid,@Param("pid") long pid);
	
	@Modifying(clearAutomatically = true)
	@Transactional
	@Query(value="UPDATE Cart c SET c.productQuantity=:qyt WHERE c.customerId=:cid AND c.productId=:pid")
	void setNewQuantity(@Param("cid") long cid,@Param("pid") long pid,@Param("qyt") long qyt);
	
	@Query(value="SELECT c from Cart c WHERE c.customerId=:cid")
	List<Cart> getCartItemsById(@Param("cid") long cid);
}
