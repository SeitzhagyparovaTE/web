package web.dto;

import lombok.*;

@EqualsAndHashCode(callSuper = true)
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PodDto extends BaseDto {
    private String name;
    private int cost;


}
