package web.converter;
//5:31
import core.model.Pod;
import org.springframework.stereotype.Component;
import web.dto.PodDto;

@Component
public class PodConverter extends AbstractConverterBaseEntityConverter<Pod, PodDto> {

    @Override
    public Pod convertDtoToModel(PodDto podDto) {
        Pod pod =  Pod.builder().name(podDto.getName()).cost(podDto.getCost()).build();
        pod.setId(podDto.getId());
        return pod;
    }

    @Override
    public PodDto convertModelToDto(Pod pod) {
        PodDto podDto =  PodDto.builder().name(pod.getName()).cost(pod.getCost()).build();
        podDto.setId(pod.getId());
        return podDto;
    }
}
