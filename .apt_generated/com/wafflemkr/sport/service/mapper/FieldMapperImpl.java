package com.wafflemkr.sport.service.mapper;

import com.wafflemkr.sport.domain.Club;
import com.wafflemkr.sport.domain.Field;
import com.wafflemkr.sport.service.dto.FieldDTO;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.Generated;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2017-08-15T13:46:40-0400",
    comments = "version: 1.1.0.Final, compiler: Eclipse JDT (IDE) 3.13.0.v20170516-1929, environment: Java 1.8.0_77 (Oracle Corporation)"
)
@Component
public class FieldMapperImpl implements FieldMapper {

    @Autowired
    private ClubMapper clubMapper;

    @Override
    public List<Field> toEntity(List<FieldDTO> dtoList) {
        if ( dtoList == null ) {
            return null;
        }

        List<Field> list = new ArrayList<Field>();
        for ( FieldDTO fieldDTO : dtoList ) {
            list.add( toEntity( fieldDTO ) );
        }

        return list;
    }

    @Override
    public List<FieldDTO> toDto(List<Field> entityList) {
        if ( entityList == null ) {
            return null;
        }

        List<FieldDTO> list = new ArrayList<FieldDTO>();
        for ( Field field : entityList ) {
            list.add( toDto( field ) );
        }

        return list;
    }

    @Override
    public FieldDTO toDto(Field field) {
        if ( field == null ) {
            return null;
        }

        FieldDTO fieldDTO_ = new FieldDTO();

        fieldDTO_.setOwnerId( fieldOwnerId( field ) );
        fieldDTO_.setId( field.getId() );
        fieldDTO_.setFieldName( field.getFieldName() );
        fieldDTO_.setStatus( field.getStatus() );
        fieldDTO_.setMapLink( field.getMapLink() );

        return fieldDTO_;
    }

    @Override
    public Field toEntity(FieldDTO fieldDTO) {
        if ( fieldDTO == null ) {
            return null;
        }

        Field field_ = new Field();

        field_.setOwner( clubMapper.fromId( fieldDTO.getOwnerId() ) );
        field_.setId( fieldDTO.getId() );
        field_.setFieldName( fieldDTO.getFieldName() );
        field_.setStatus( fieldDTO.getStatus() );
        field_.setMapLink( fieldDTO.getMapLink() );

        return field_;
    }

    private Long fieldOwnerId(Field field) {

        if ( field == null ) {
            return null;
        }
        Club owner = field.getOwner();
        if ( owner == null ) {
            return null;
        }
        Long id = owner.getId();
        if ( id == null ) {
            return null;
        }
        return id;
    }
}
