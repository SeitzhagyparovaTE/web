package web.dto;

import lombok.*;

import java.util.List;


@EqualsAndHashCode(callSuper = true)
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor


public class NodeDto extends BaseDto {
    private String name;
    private int totalCapacity;
    private List<Long> actors;
}
