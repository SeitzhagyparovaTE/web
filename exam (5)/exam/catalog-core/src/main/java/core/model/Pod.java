package core.model;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;

@EqualsAndHashCode(callSuper = true)
@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Pod extends BaseEntity<Long> {
    @Column(name="name", unique = true, nullable = false)
    private String name;

    @Column(name="cost", nullable = false)
    private int cost;

}
