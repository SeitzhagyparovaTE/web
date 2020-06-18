package core.model;

import lombok.*;

import javax.persistence.*;
import java.util.List;


@Entity
@EqualsAndHashCode(callSuper = true, exclude = {"actors"})
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Node extends BaseEntity<Long>{
    @Column(name= "name", unique = true, nullable = false)
    private String name;

    @Column(name="totalCapacity", nullable = false)
    private int totalCapacity;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<Pod> pods;
}
