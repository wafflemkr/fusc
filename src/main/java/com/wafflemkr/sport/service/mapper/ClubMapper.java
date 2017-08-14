package com.wafflemkr.sport.service.mapper;

import com.wafflemkr.sport.domain.*;
import com.wafflemkr.sport.service.dto.ClubDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity Club and its DTO ClubDTO.
 */
@Mapper(componentModel = "spring", uses = {})
public interface ClubMapper extends EntityMapper <ClubDTO, Club> {
    
    
    default Club fromId(Long id) {
        if (id == null) {
            return null;
        }
        Club club = new Club();
        club.setId(id);
        return club;
    }
}
