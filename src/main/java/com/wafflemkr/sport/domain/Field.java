package com.wafflemkr.sport.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.io.Serializable;
import java.util.Objects;

import com.wafflemkr.sport.domain.enumeration.FieldStatusType;

/**
 * A Field.
 */
@Entity
@Table(name = "field")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Field implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @NotNull
    @Size(max = 80)
    @Column(name = "field_name", length = 80, nullable = false)
    private String fieldName;

    @Enumerated(EnumType.STRING)
    @Column(name = "status")
    private FieldStatusType status;

    @Column(name = "map_link")
    private String mapLink;

    @ManyToOne
    private Club owner;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFieldName() {
        return fieldName;
    }

    public Field fieldName(String fieldName) {
        this.fieldName = fieldName;
        return this;
    }

    public void setFieldName(String fieldName) {
        this.fieldName = fieldName;
    }

    public FieldStatusType getStatus() {
        return status;
    }

    public Field status(FieldStatusType status) {
        this.status = status;
        return this;
    }

    public void setStatus(FieldStatusType status) {
        this.status = status;
    }

    public String getMapLink() {
        return mapLink;
    }

    public Field mapLink(String mapLink) {
        this.mapLink = mapLink;
        return this;
    }

    public void setMapLink(String mapLink) {
        this.mapLink = mapLink;
    }

    public Club getOwner() {
        return owner;
    }

    public Field owner(Club club) {
        this.owner = club;
        return this;
    }

    public void setOwner(Club club) {
        this.owner = club;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Field field = (Field) o;
        if (field.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), field.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Field{" +
            "id=" + getId() +
            ", fieldName='" + getFieldName() + "'" +
            ", status='" + getStatus() + "'" +
            ", mapLink='" + getMapLink() + "'" +
            "}";
    }
}
