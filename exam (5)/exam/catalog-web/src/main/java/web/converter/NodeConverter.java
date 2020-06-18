package web.converter;

import core.model.BaseEntity;
import core.model.Node;
import org.springframework.stereotype.Component;
import web.dto.NodeDto;

import java.util.stream.Collectors;

@Component
public class NodeConverter extends AbstractConverterBaseEntityConverter<Node, NodeDto> {
    @Override
    public Node convertDtoToModel(NodeDto nodeDto) {
        return Node.builder().name(nodeDto.getName()).totalCapacity(nodeDto.getTotalCapacity()).build();
    }

    @Override
    public NodeDto convertModelToDto(Node node) {
        NodeDto nodeDto = NodeDto.builder().name(node.getName()).totalCapacity(node.getTotalCapacity()).build();
        nodeDto.setId(node.getId());
        return nodeDto;
    }
    public NodeDto convertFetchedModelToDto(Node node) {
        NodeDto nodeDto = NodeDto.builder().name(node.getName()).totalCapacity(node.getTotalCapacity()).actors(node.getPods().stream().map(BaseEntity::getId).collect(Collectors.toList())).build();
        nodeDto.setId(node.getId());
        return nodeDto;
    }
}
