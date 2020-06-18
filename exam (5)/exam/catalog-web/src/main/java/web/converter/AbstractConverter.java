package web.converter;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Created by radu.
 */
public abstract class AbstractConverter<Model, Dto>
        implements Converter<Model, Dto> {

    public Collection<Dto> convertModelsToDtos(Collection<Model> models) {
        return models.stream()
                .map(this::convertModelToDto)
                .collect(Collectors.toSet());
    }

    public Collection<Model> convertDtosToModel(Collection<Dto> dtos) {
        return dtos.stream()
                .map(this::convertDtoToModel)
                .collect(Collectors.toSet());
    }

    public List<Dto> convertModelsToDtosSorted(Collection<Model> models) {
        return models.stream()
                .map(this::convertModelToDto)
                .collect(Collectors.toList());
    }

    public Collection<Model> convertDtosToModelSorted(Collection<Dto> dtos) {
        return dtos.stream()
                .map(this::convertDtoToModel)
                .collect(Collectors.toList());
    }
}