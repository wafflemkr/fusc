package com.wafflemkr.sport.repository;

import com.wafflemkr.sport.domain.Club;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the Club entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ClubRepository extends JpaRepository<Club,Long> {
    
}
