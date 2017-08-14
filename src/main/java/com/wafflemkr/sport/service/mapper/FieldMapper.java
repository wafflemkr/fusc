package com.wafflemkr.sport.service.mapper;

import com.wafflemkr.sport.domain.*;
import com.wafflemkr.sport.service.dto.FieldDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity Field and its DTO FieldDTO.
 */
@Mapper(componentModel = "spring", uses = {ClubMapper.class, })
public interface FieldMapper extends EntityMapper <FieldDTO, Field> {

    @Mapping(source = "owner.id", target = "ownerId")
    FieldDTO toDto(Field field); 

    @Mapping(source = "ownerId", target = "owner")
    Field toEntity(FieldDTO fieldDTO); 
    default Field fromId(Long id) {
        if (id == null) {
            return null;
        }
        Field field = new Field();
        field.setId(id);
        return field;
    }
}
