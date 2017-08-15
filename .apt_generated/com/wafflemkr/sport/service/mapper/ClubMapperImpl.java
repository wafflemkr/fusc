package com.wafflemkr.sport.service.mapper;

import com.wafflemkr.sport.domain.Club;
import com.wafflemkr.sport.service.dto.ClubDTO;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2017-08-15T13:46:39-0400",
    comments = "version: 1.1.0.Final, compiler: Eclipse JDT (IDE) 3.13.0.v20170516-1929, environment: Java 1.8.0_77 (Oracle Corporation)"
)
@Component
public class ClubMapperImpl implements ClubMapper {

    @Override
    public Club toEntity(ClubDTO dto) {
        if ( dto == null ) {
            return null;
        }

        Club club = new Club();

        club.setId( dto.getId() );
        club.setClubName( dto.getClubName() );
        club.setLink( dto.getLink() );

        return club;
    }

    @Override
    public ClubDTO toDto(Club entity) {
        if ( entity == null ) {
            return null;
        }

        ClubDTO clubDTO = new ClubDTO();

        clubDTO.setId( entity.getId() );
        clubDTO.setClubName( entity.getClubName() );
        clubDTO.setLink( entity.getLink() );

        return clubDTO;
    }

    @Override
    public List<Club> toEntity(List<ClubDTO> dtoList) {
        if ( dtoList == null ) {
            return null;
        }

        List<Club> list = new ArrayList<Club>();
        for ( ClubDTO clubDTO : dtoList ) {
            list.add( toEntity( clubDTO ) );
        }

        return list;
    }

    @Override
    public List<ClubDTO> toDto(List<Club> entityList) {
        if ( entityList == null ) {
            return null;
        }

        List<ClubDTO> list = new ArrayList<ClubDTO>();
        for ( Club club : entityList ) {
            list.add( toDto( club ) );
        }

        return list;
    }
}
