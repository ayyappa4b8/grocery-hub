package com.grocery.hub.ordservice.repository;

import com.grocery.hub.ordservice.entity.CustomerOrder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.*;


@Repository
public interface OrderRepository extends JpaRepository<CustomerOrder,Long> {
	
	List<CustomerOrder> findByCustomerId(long customerId);
	
	CustomerOrder findByOrderId(long orderId);

}
