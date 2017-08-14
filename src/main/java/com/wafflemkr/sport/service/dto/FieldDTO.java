package com.wafflemkr.sport.service.dto;


import javax.validation.constraints.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;
import com.wafflemkr.sport.domain.enumeration.FieldStatusType;

/**
 * A DTO for the Field entity.
 */
public class FieldDTO implements Serializable {

    private Long id;

    @NotNull
    @Size(max = 80)
    private String fieldName;

    private FieldStatusType status;

    private String mapLink;

    private Long ownerId;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFieldName() {
        return fieldName;
    }

    public void setFieldName(String fieldName) {
        this.fieldName = fieldName;
    }

    public FieldStatusType getStatus() {
        return status;
    }

    public void setStatus(FieldStatusType status) {
        this.status = status;
    }

    public String getMapLink() {
        return mapLink;
    }

    public void setMapLink(String mapLink) {
        this.mapLink = mapLink;
    }

    public Long getOwnerId() {
        return ownerId;
    }

    public void setOwnerId(Long clubId) {
        this.ownerId = clubId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        FieldDTO fieldDTO = (FieldDTO) o;
        if(fieldDTO.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), fieldDTO.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "FieldDTO{" +
            "id=" + getId() +
            ", fieldName='" + getFieldName() + "'" +
            ", status='" + getStatus() + "'" +
            ", mapLink='" + getMapLink() + "'" +
            "}";
    }
}
