package com.grocery.hub.loginregister.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.grocery.hub.loginregister.entity.Customer;

public interface CustomerRepository extends JpaRepository<Customer,Long> {

	Customer findByCustomerId(long customerId);
	Customer findByCustomerEmail(String customerEmail);
	Optional<Customer> findOneByCustomerEmailAndCustomerPassword(String customerEmail,String customerPassword);
}
