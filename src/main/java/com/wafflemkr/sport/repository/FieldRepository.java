package com.wafflemkr.sport.repository;

import com.wafflemkr.sport.domain.Field;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the Field entity.
 */
@SuppressWarnings("unused")
@Repository
public interface FieldRepository extends JpaRepository<Field,Long> {
    
}
