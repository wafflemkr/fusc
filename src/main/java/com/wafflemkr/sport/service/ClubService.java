package com.wafflemkr.sport.service;

import com.wafflemkr.sport.domain.Club;
import com.wafflemkr.sport.repository.ClubRepository;
import com.wafflemkr.sport.service.dto.ClubDTO;
import com.wafflemkr.sport.service.mapper.ClubMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


/**
 * Service Implementation for managing Club.
 */
@Service
@Transactional
public class ClubService {

    private final Logger log = LoggerFactory.getLogger(ClubService.class);

    private final ClubRepository clubRepository;

    private final ClubMapper clubMapper;

    public ClubService(ClubRepository clubRepository, ClubMapper clubMapper) {
        this.clubRepository = clubRepository;
        this.clubMapper = clubMapper;
    }

    /**
     * Save a club.
     *
     * @param clubDTO the entity to save
     * @return the persisted entity
     */
    public ClubDTO save(ClubDTO clubDTO) {
        log.debug("Request to save Club : {}", clubDTO);
        Club club = clubMapper.toEntity(clubDTO);
        club = clubRepository.save(club);
        return clubMapper.toDto(club);
    }

    /**
     *  Get all the clubs.
     *
     *  @param pageable the pagination information
     *  @return the list of entities
     */
    @Transactional(readOnly = true)
    public Page<ClubDTO> findAll(Pageable pageable) {
        log.debug("Request to get all Clubs");
        return clubRepository.findAll(pageable)
            .map(clubMapper::toDto);
    }

    /**
     *  Get one club by id.
     *
     *  @param id the id of the entity
     *  @return the entity
     */
    @Transactional(readOnly = true)
    public ClubDTO findOne(Long id) {
        log.debug("Request to get Club : {}", id);
        Club club = clubRepository.findOne(id);
        return clubMapper.toDto(club);
    }

    /**
     *  Delete the  club by id.
     *
     *  @param id the id of the entity
     */
    public void delete(Long id) {
        log.debug("Request to delete Club : {}", id);
        clubRepository.delete(id);
    }
}
