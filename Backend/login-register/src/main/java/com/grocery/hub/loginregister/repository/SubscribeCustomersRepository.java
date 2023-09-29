package com.grocery.hub.loginregister.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.grocery.hub.loginregister.entity.SubscribeCustomers;

@Repository
public interface SubscribeCustomersRepository extends JpaRepository<SubscribeCustomers,Long>{

}
