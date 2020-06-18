package web.converter;


import core.model.BaseEntity;
import web.dto.BaseDto;

/**
 * Created by radu.
 */

public interface ConverterBaseEntity<Model extends BaseEntity<Long>, Dto extends BaseDto>
        extends Converter<Model, Dto> {

}

